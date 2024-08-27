import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/Home.css';

const Home = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleBookNow = (tour) => {
    setSelectedTour(tour);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      setSelectedTour(null); // Reset selected tour after submission
      window.location.reload(); // Reset to home page
    }, 5000);
  };

  const handleScroll = () => {
    const items = document.querySelectorAll('.spin-on-scroll');
    
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add('spin');
      } else {
        item.classList.remove('spin');
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run it once to trigger any elements already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tours = [
    { id: 1, title: "Paris Getaway", description: "Experience the city of love", location: "Paris", date: "Aug 30, 2024", image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Tokyo Adventure", description: "Explore the vibrant metropolis", location: "Tokyo", date: "Sep 15, 2024", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, title: "African Safari", description: "Witness nature's wonders", location: "Kenya", date: "Oct 5, 2024", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, title: "Tsavo Safari", description: "Experience the migration", location: "Kenya", date: "Aug 30, 2024", image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, title: "Nairobi Adventure", description: "Experience the city of love", location: "Kenya", date: "Aug 30, 2024", image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1565472501696-b871fa1ccfda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Eiffel Tower" },
    { id: 2, src: "https://images.unsplash.com/photo-1497281852309-02ee1925c3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3OTAwNDN8fGVufDB8fHx8fA%3D%3D", alt: "Mount Fuji" },
    { id: 3, src: "https://images.unsplash.com/photo-1430026996702-608b84ce9281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw3OTAwNDN8fGVufDB8fHx8fA%3D%3D", alt: "African Elephant" },
    { id: 4, src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww", alt: "Eiffel Tower" },
    { id: 5, src: "https://images.unsplash.com/photo-1603998382124-c9835bf50409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDE0NDM0fHxlbnwwfHx8fHw%3D", alt: "Eiffel Tower" },
  ];

  const reviews = [
    { id: 1, text: "An unforgettable experience!", author: "John Doe" },
    { id: 2, text: "Professionally organized and amazing tours!", author: "Jane Smith" },
    { id: 3, text: "Will definitely book again!", author: "Mike Johnson" },
  ];

  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search events and tours" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <br />

      <div className="carousel-container">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1527073620320-77635188c627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center">Upcoming Tours & Events</h2>
        <div className="row mt-4">
          {tours.map((tour) => (
            <div className="col-md-4" key={tour.id}>
              <div className="card mb-4 shadow-sm">
                <img src={tour.image} className="card-img-top" alt={tour.title} />
                <div className="card-body">
                  <h5 className="card-title">{tour.title}</h5>
                  <p className="card-text">{tour.description}</p>
                  <p className="card-text"><small className="text-muted">Location: {tour.location}</small></p>
                  <p className="card-text"><small className="text-muted">Date: {tour.date}</small></p>
                  <button className="btn btn-primary" onClick={() => handleBookNow(tour)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* <section id="upcoming-tours" className="py-5">
        <div className="container">
           <h2 className="text-center mb-4">Upcoming Tours & Events</h2>
           <div className="row">
             {tours.map(tour => (
              <div key={tour.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={tour.image} className="card-img-top" alt={tour.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{tour.title}</h5>
                    <p className="card-text">{tour.description}</p>
                    <p className="card-text mt-auto"><small className="text-muted">Location: {tour.location} | Date: {tour.date}</small></p>
                    <button
                      className="btn btn-primary mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#bookNowModal"
                      onClick={() => handleBookNow(tour)}
                    >
                      Book Now
                    </button>                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

     

{/* <section id="photo-gallery" className="py-5 bg-light">
         <div className="container">
           <h2 className="text-center mb-4">Photo Gallery</h2>
           <div className="row">
             {galleryImages.map(image => (
              <div key={image.id} className="col-md-4 mb-4">
                <img src={image.src} className="img-fluid rounded" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section id="photo-gallery" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Photo Gallery</h2>
    <div className="row g-4">
      {galleryImages.map(image => (
        <div key={image.id} className="col-md-4">
          <div className="gallery-item spin-on-scroll">
            <img src={image.src} className="img-fluid rounded" alt={image.alt} />
            <div className="overlay">
              <div className="overlay-content">
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     

      <section id="about-us" className="py-5">
        <div className="container">
           <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">Arika Le Travels is your gateway to extraordinary adventures. We specialize in curating unforgettable experiences for travelers seeking both luxury and authenticity. Our team of seasoned professionals ensures that every journey is meticulously planned and flawlessly executed.</p>
         </div>
       </section>

      <section id="reviews" className="py-5 bg-light">
         <div className="container">           <h2 className="text-center mb-4">What our customers say</h2>
           <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-inner">
               {reviews.map((review, index) => (
                <div key={review.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <blockquote className="blockquote text-center">
                  <img
                src={review.image || 'https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'} // Use review image or placeholder
                alt={review.author}
                className="rounded-circle mb-3"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
                    <p className="mb-0">{review.text}</p>
                    <br/>
                    <footer className="blockquote-footer">{review.author}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  


    

      <section id="contact-us" className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Contact Us</h2>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card p-4 shadow-lg border-0">
          <div className="row">
            <div className="col-md-6">
              <form className="row g-3">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary btn-lg">Send</button>
                </div>
              </form>
            </div>
            <br/>
            <div className="col-md-6">
              <div className="address-section text-center">
                <h4 className="mb-4">Our Location</h4>
                <p>
                  <strong>Arika le Travels</strong><br />
                  1234 Moi avenue, Nairobi, 56789<br />
                  Kenya<br />
                  <strong>Phone:</strong> +1 234 567 8901<br />
                  <strong>Email:</strong> inf@arikatravels.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


       {/* Booking Modal */}

        {/* {selectedTour && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book: {selectedTour.title} <br/>{selectedTour.description}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setSelectedTour(null)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">ID number:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Mpesa Number">Mpesa number for payment:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="date"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )} */}

{selectedTour && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">Book: {selectedTour.title} <br></br>{selectedTour.description}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedTour(null)}
                  aria-label="Close"
                ></button>
              </div>
              {/* Modal Body */}
              <div className="modal-body">
                <form onSubmit={handleBookingSubmit}>
                  <div className="mb-3">
                    <label htmlFor="bookingName" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bookingName"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookingEmail" className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="bookingEmail"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookingID" className="form-label">ID Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="bookingID"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookingMpesa" className="form-label">Mpesa Number for Payment:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="bookingMpesa"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
     
      {showNotification && (
  <div className="notification-wrapper">
    <div className="alert alert-success notification" role="alert">
      THANK YOU for making a purchase
      You will be prompted to make payments. Then, a receipt will be sent to your email.
    </div>
  </div>
)}


      
    </div>
  );
};

export default Home;
