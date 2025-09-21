export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 p-6">
      <div className="max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your request has been received.  
          Our team will get back to you within 24 hours.
        </p>

        <a
          href="/portfolio"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Portfolio
        </a>

        <div className="mt-6 text-sm text-gray-500">
          Prefer to talk right now?{" "}
          <a href="tel:+19179476813" className="text-blue-600 font-semibold">
            +1 (917) 947-6813
          </a>{" "}
          |{" "}
          <a href="tel:+972533907570" className="text-blue-600 font-semibold">
            +972 53-390-7570
          </a>
        </div>
      </div>
    </div>
  );
}
