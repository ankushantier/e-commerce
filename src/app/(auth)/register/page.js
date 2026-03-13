"use client"
import { useState } from 'react'
import Link from 'next/link'
import CommonButton from '../../../components/common/commonBtn/commonBtn'
import CommonInput from '../../../components/common/CommonInput/CommonInput'
import CommonSelect from '../../../components/common/CommonSelect/CommonSelect'

const RegisterPage = () => {
  const [value, setValue] = useState('')
  const roleOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];
  return (
    <div className="register-page">
      <h2 className="title">Register</h2>

      <form>
        <CommonInput label="Email" placeholder="Enter your email" />
        <CommonInput label="Password" placeholder="Enter your password" />
        <CommonInput label="Confirm Password" placeholder="Enter your confirm password" />
        <CommonSelect
          label="Gender"
          value={value}
          options={roleOptions}
          placeholder="Select gender"
          onChange={(e) => setValue(e.target.value)}
        />
        <CommonButton text="Register" fullWidth type="submit" />
        <p className="register">
          Already have an account? <Link href="/login" >Login</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterPage