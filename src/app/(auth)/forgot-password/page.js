import React from 'react'

const ForgotPage = () => {
    return (
        <div className="forgot-page">
            <h2 className="title">Forgot Password</h2>

            <form>
                <CommonInput label="Email" placeholder="Enter your email" />
                <CommonInput label="Password" placeholder="Enter your password" />

                <div className="forgot">
                    <a href="#">Forgot Password?</a>
                </div>

                <CommonButton text="login" fullWidth type="submit" />

                <p className="register">
                    Don't have an account? <Link href="/register">Register Now</Link>
                </p>
            </form>
        </div>)
}

export default ForgotPage