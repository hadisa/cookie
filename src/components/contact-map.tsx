import { Car, Clock, Cookie } from "lucide-react";

const ContactMap = () => {
    return (
        <section id="map" className="py-16 bg-primary-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading">Find Our Bakery</h2>
                    <p className="text-primary-700 max-w-2xl mx-auto">Visit our store to experience the aroma of freshly baked cookies and taste our delicious creations.</p>
                </div>

                <div className="map-container">
                    {/* <!-- Embedded Google Map --> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.004258724269!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c8eef13%3A0x4d0b5a5a5a5a5a5a!2s123%20Cookie%20Lane%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1685724093250!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        // style={`{border:0}`}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-primary-700 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-3 font-heading">Store Hours</h3>
                        <ul className="text-primary-600 space-y-1">
                            <li>Monday-Friday: 8am - 6pm</li>
                            <li>Saturday: 9am - 5pm</li>
                            <li>Sunday: 10am - 4pm</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Car className="text-primary-700 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-3 font-heading">Parking</h3>
                        <p className="text-primary-600">Free parking available in our dedicated lot behind the bakery. Additional street parking available.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Cookie className="text-primary-700 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-3 font-heading">Fresh Daily</h3>
                        <p className="text-primary-600">Our cookies are baked fresh throughout the day. Call ahead for large orders or special requests.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMap;
