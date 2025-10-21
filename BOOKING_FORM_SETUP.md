# Booking Form Setup Guide

Your booking form is now integrated with **Web3Forms** for free email delivery with spam protection. Follow these steps to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Web3Forms Access Key (FREE)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email address (where you want to receive booking submissions)
4. Verify your email
5. Copy your **Access Key**

### Step 2: Add Web3Forms Access Key to Your Code

1. Open `src/pages/Booking.tsx`
2. Find line ~97: `const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key

Example:
```typescript
const WEB3FORMS_ACCESS_KEY = "abc123-def456-ghi789";
```

**That's it!** Your form will now send emails to your inbox. 

---

## 🛡️ Optional: Add Google reCAPTCHA v3 (Recommended)

Adding reCAPTCHA provides additional spam protection (invisible to users).

### Step 1: Get reCAPTCHA Keys (FREE)

1. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Click the **"+"** button to register a new site
3. Fill in:
   - **Label**: "My Booking Form" (or any name)
   - **reCAPTCHA type**: Choose **"reCAPTCHA v3"**
   - **Domains**: Add your domain (e.g., `yourdomain.com`)
     - For testing locally, also add `localhost`
4. Accept terms and click **Submit**
5. Copy your **Site Key** (you'll see two keys - you only need the Site Key for frontend)

### Step 2: Add reCAPTCHA Site Key to Your Code

1. Open `src/pages/Booking.tsx`
2. Find line ~41: `const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY_HERE";`
3. Replace `YOUR_RECAPTCHA_SITE_KEY_HERE` with your actual site key

Example:
```typescript
const RECAPTCHA_SITE_KEY = "6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
```

---

## ✅ What's Already Implemented

### Spam Protection
- ✅ **Honeypot field**: Hidden field that catches bots
- ✅ **reCAPTCHA v3**: Invisible spam protection (once you add the key)
- ✅ **Email validation**: Validates email format before submission

### User Experience
- ✅ **Async submission**: No page reload, smooth experience
- ✅ **Success message**: "Thank you! Your booking request has been sent successfully"
- ✅ **Form reset**: Form clears automatically after successful submission
- ✅ **Loading state**: Button shows "Sending..." during submission
- ✅ **Error handling**: Shows helpful error messages if something goes wrong

### Email Format
The email you receive will include:
- Client name
- Email address
- Phone number
- Selected service
- Preferred date & time
- Address
- Additional notes

---

## 🧪 Testing Your Form

1. **Replace the access key** with your real Web3Forms key
2. Fill out the booking form on your site
3. Click "Submit Booking Request"
4. Check your email inbox (the one you registered with Web3Forms)
5. You should receive the booking details within seconds!

---

## 🔧 Troubleshooting

### Form submissions not arriving?
- ✅ Verify your Web3Forms access key is correct
- ✅ Check your spam/junk folder
- ✅ Confirm your email is verified with Web3Forms
- ✅ Check browser console for error messages (press F12)

### reCAPTCHA not working?
- ✅ Make sure you chose **reCAPTCHA v3** (not v2)
- ✅ Add your domain to the reCAPTCHA admin panel
- ✅ For local testing, add `localhost` to allowed domains
- ✅ Site key should be the **public** key (not the secret key)

### Button stays disabled?
- ✅ Check browser console for JavaScript errors
- ✅ Verify all required fields are filled
- ✅ Check that your access key format is correct (no extra spaces)

---

## 📋 Configuration Summary

**Required:**
- Web3Forms Access Key (Line ~97 in `src/pages/Booking.tsx`)

**Optional but Recommended:**
- reCAPTCHA Site Key (Line ~41 in `src/pages/Booking.tsx`)

---

## 💰 Pricing

- **Web3Forms**: 100% FREE (250 submissions/month on free tier, unlimited with paid plans)
- **Google reCAPTCHA v3**: 100% FREE (1 million assessments/month)
- **Hosting**: Works with any static hosting (Netlify, Vercel, GitHub Pages, etc.)

---

## 🎉 You're All Set!

Once you've added your Web3Forms access key, your booking form will be fully functional and ready to accept client bookings. The form works entirely on the frontend with no backend server needed!

Need help? Contact Web3Forms support or check their documentation at [https://docs.web3forms.com](https://docs.web3forms.com)
