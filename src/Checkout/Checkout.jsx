import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styling.css"
import PaystackPop from '@paystack/inline-js'
import { set } from 'react-hook-form'

const Checkout = () => {
  const navigate = useNavigate()
  const popup = new PaystackPop()
  const currentUser = JSON.parse(localStorage.getItem("user"))
  const [isLoading, setIsLoading] = useState(false)
  const [deliveryCost, setDeliveryCost] = useState()
  const [deliveryTime, getDeliveryTime] = useState()
  const cartTotal = Number(JSON.parse(localStorage.getItem("cartTotal"))) || 0
  const [deliveryAddress, setDeliveryAddress] = useState({
    recipientName: currentUser?.name || "",
    phoneNumber: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    landmark: "",
    deliveryNotes: ""
  })
  const [formError, setFormError] = useState("")

  const handleAddressChange = (event) => {
    const { name, value } = event.target
    setDeliveryAddress((currentAddress) => ({ ...currentAddress, [name]: value }))
  }

  const validateAddress = () => {
    const requiredFields = ["recipientName", "phoneNumber", "streetAddress", "city", "state"]
    if (requiredFields.some((field) => !deliveryAddress[field].trim())) {
      setFormError("Please complete all required delivery details.")
      return false
    }
    setFormError("")
    return true
  }

  const proceed = async () => {
    if (!deliveryCost) {
      // alert("Unable to start checkout: missing delivery cost.")
      Swal.fire({
                    title: 'Error',
                    text: "Unable to start checkout: missing delivery cost.",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
      return
    }


    if (!validateAddress()) return

    const user = JSON.parse(localStorage.getItem("user"))
    const orderId = JSON.parse(localStorage.getItem("orderId"))
    const total = Number(JSON.parse(localStorage.getItem("cartTotal")))

    if (!user?.email || !user?.name || !total) {
      alert("Unable to start checkout: missing user or total amount.")
      return
    }

    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress))
    localStorage.setItem("logististicsCost", JSON.stringify(deliveryCost))

    const checkoutPayload = {
      email: user.email,
      name: user.name,
      orderId,
      deliveryCost
      // deliveryAddress
    }

    // const orderId = JSON.parse(localStorage.getItem("orderId"))
  const placeOrder = async() => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
      body: JSON.stringify({
        address: JSON.parse(localStorage.getItem("deliveryAddress")),
        logisticsAmount: JSON.parse(localStorage.getItem("logististicsCost")),
        status: "pending"
      })
    });
    const data = await res.json();
    if(data.status === 201 || data.status === "success"){
      alert("completing checkout!")
    }else{
      alert(data.message || "Error placing order. Please try again.")
    }
  }


    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/paystack`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(checkoutPayload)
      })

      if (!res.ok) {
        const errorText = await res.text()
        console.error("Paystack checkout request failed:", res.status, errorText)
        alert("Server error occurred while initiating payment. Please try again.")
        return
      }

      const data = await res.json()
      console.log("Paystack init response:", data)

      if (data.status === true || data.status === "success") {
        popup.resumeTransaction(data.data?.access_code, {
          onLoad: (payload) => console.log("Paystack checkout loaded:", payload),
          onError: (error) => console.error("Paystack checkout error:", error),
          onCancel: () => console.log("Paystack transaction cancelled"),
          onSuccess: (response) => {
            console.log("Paystack transaction success:", response)
            placeOrder()
            navigate('/payment-success', { replace: true })
          },
        })
      } else {
        console.error("Paystack init response failed:", data)
        alert("Error occurred while initiating payment. Please try again.")
      }
    } catch (error) {
      console.error("Error occurred while fetching checkout data:", error)
      alert("Unable to reach the payment server. Please try again.")
    }
  }

  const processLogistics = async () => {
    if (!deliveryAddress.streetAddress || !deliveryAddress.city || !deliveryAddress.state) {
      setFormError("Please fill in street address, city, and state to get delivery options.")
      return
    }

    const logisticsPayload = `${deliveryAddress.streetAddress}, ${deliveryAddress.city}, ${deliveryAddress.state}`

    try {
      setIsLoading(true)
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/theyutes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ address: logisticsPayload })
      })

      if (!res.ok) {
        const errorText = await res.text()
        console.error("Logistics request failed:", res.status, errorText)
        alert("Unable to fetch delivery options. Please try again.")
        return
      }

      const data = await res.json()
      console.log("Logistics response:", data)

      if (data.cheapest) {
        setDeliveryCost(data.cheapest.priceKobo)
        getDeliveryTime(data.cheapest.totalMinutes)
        setFormError("")
      } else {
        console.error("No delivery options found:", data)
        alert("No delivery options available for this address.")
      }
    } catch (error) {
      console.error("Error fetching logistics:", error)
      alert("Unable to reach the logistics server. Please try again.")
    }
    finally{
      setIsLoading(false)
    }
  }
  

  return (
    <div className='checkoutWrapper container py-4'>
      <h2 className='text-center'>Checkout Page</h2>
      <p className='text-center'>Welcome to your checkout page , {currentUser?.name}!</p>
      {/* <h4>Review Your Order</h4>

      <div className='orderSummary py-2 container border border-3 rounded my-2'>
        <div className="div">
          Total Items : 
        </div>
        <ul>
          <li>Product 1 - Quantity: 2 - Price: NGN 20</li>
        </ul>

      </div> */}

      {/* <h4>Delivery Details</h4>
      <p>Enter the address where you would like your order delivered.</p> */}
      <div className="formWrap">
        <form onSubmit={(event) => { event.preventDefault(); proceed() }} noValidate>
          <div className="formIntro">
            <span className="formIntroIcon" aria-hidden="true">⌖</span>
            <div>
              <h5>Delivery address</h5>
              <p>We’ll use these details to get your order to you smoothly.</p>
            </div>
          </div>

          <div className="addressFormGrid">
            <div className="addressField addressFieldWide">
              <label htmlFor="recipientName">Recipient’s full name <span aria-hidden="true">*</span></label>
              <input id="recipientName" name="recipientName" type="text" autoComplete="name" value={deliveryAddress.recipientName} onChange={handleAddressChange} placeholder="e.g. Dolu" required />
            </div>
            <div className="addressField">
              <label htmlFor="phoneNumber">Phone number <span aria-hidden="true">*</span></label>
              <input id="phoneNumber" name="phoneNumber" type="tel" autoComplete="tel" inputMode="tel" value={deliveryAddress.phoneNumber} onChange={handleAddressChange} placeholder="e.g. 0801 234 5678" required />
            </div>
            <div className="addressField">
              <label htmlFor="city">City / Area <span aria-hidden="true">*</span></label>
              <input id="city" name="city" type="text" autoComplete="address-level2" value={deliveryAddress.city} onChange={handleAddressChange} placeholder="e.g. Ikeja" required />
            </div>
            <div className="addressField addressFieldWide">
              <label htmlFor="streetAddress">Street address <span aria-hidden="true">*</span></label>
              <input id="streetAddress" name="streetAddress" type="text" autoComplete="street-address" value={deliveryAddress.streetAddress} onChange={handleAddressChange} placeholder="House number and street name" required />
            </div>
            <div className="addressField">
              <label htmlFor="apartment">Apartment, suite, or floor <span className="optional">(optional)</span></label>
              <input id="apartment" name="apartment" type="text" autoComplete="address-line2" value={deliveryAddress.apartment} onChange={handleAddressChange} placeholder="e.g. Flat 2B" />
            </div>
            <div className="addressField">
              <label htmlFor="state">State <span aria-hidden="true">*</span></label>
              <input id="state" name="state" type="text" autoComplete="address-level1" value={deliveryAddress.state} onChange={handleAddressChange} placeholder="e.g. Lagos" required />
            </div>
            <div className="addressField addressFieldWide">
              <label htmlFor="landmark">Nearest landmark <span className="optional">(optional)</span></label>
              <input id="landmark" name="landmark" type="text" value={deliveryAddress.landmark} onChange={handleAddressChange} placeholder="e.g. Opposite the Community Gate" />
            </div>
            <div className="addressField addressFieldWide">
              <label htmlFor="deliveryNotes">Delivery instructions <span className="optional">(optional)</span></label>
              <textarea id="deliveryNotes" name="deliveryNotes" rows="3" value={deliveryAddress.deliveryNotes} onChange={handleAddressChange} placeholder="Helpful directions, preferred delivery time, or who to call on arrival." />
            </div>
          </div>
          {formError && <p className="addressFormError" role="alert">{formError}</p>}
        </form>
      </div>

        <div className='logistics py-2 container border border-3 rounded my-2'>
        <h5>Delivery Fee: NGN {deliveryCost ? (deliveryCost / 100).toFixed(2) : "0.00"} {isLoading ? "loading..." : ""}
        </h5>
        <h5>Estimated delivery time (hrs): {deliveryTime ? (deliveryTime / 60).toFixed(1) : "--"} {isLoading ? "loading..." : ""}
        </h5>
        <div className="getLogistics btn btn-dark" onClick={processLogistics}>Get delivery cost</div>
      </div>
      <div className='totalAmount py-2 container border border-3 rounded my-2'>
        <h4>Total Amount: NGN {Number(cartTotal+Number(deliveryCost?deliveryCost/100:0)).toFixed(2)}
        </h4>
      </div>
        <button className='btn btn-dark my-2' onClick={proceed}>Proceed to Payment</button>

    </div>
  )
}

export default Checkout
