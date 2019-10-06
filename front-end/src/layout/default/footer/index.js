import React from 'react';

function Footer() {
    return (
        <footer id="sticky-footer" style={{marginTop: "40px", flexShrink: "none"}} className="py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; SC</small>
            </div>
        </footer>
    );
}

export default Footer;