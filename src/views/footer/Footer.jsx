export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white text-center py-3 mt-3">
            <p className="mb-0 small">
                &copy; {currentYear} Mark Salvador Batas III All Rights Reserved
            </p>
        </footer>
    );
}