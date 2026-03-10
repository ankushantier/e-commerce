export default function AuthLayout({ children }) {
    return (
        <div className="auth-layout">
            <div className="auth-layout-in">
                {children}
            </div>
        </div>
    );
}