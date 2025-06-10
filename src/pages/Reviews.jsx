import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Reviews = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [filterRating, setFilterRating] = useState('all');
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    review: '',
    product: ''
  });

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Aisha Rahman",
      rating: 5,
      title: "Absolutely Beautiful!",
      review: "I ordered the Elegant Flow Abaya and it exceeded my expectations. The quality is outstanding and the fit is perfect. The fabric is so comfortable and the design is exactly what I was looking for. Will definitely order again!",
      product: "Elegant Flow Abaya",
      date: "2024-05-15",
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      rating: 5,
      title: "Perfect for Special Occasions",
      review: "The Black Lace Sleeve Abaya is stunning! I wore it to a wedding and received so many compliments. The lace detailing is exquisite and the overall quality is top-notch. Shipping was fast too!",
      product: "Black Lace Sleeve Abaya",
      date: "2024-05-10",
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      name: "Mariam Hassan",
      rating: 4,
      title: "Great Quality, Love the Color",
      review: "The Sage Green Belted Abaya is beautiful and well-made. The color is exactly as shown in the pictures. Only reason for 4 stars instead of 5 is that it runs slightly large, but still very happy with my purchase.",
      product: "Sage Green Belted Abaya",
      date: "2024-05-08",
      helpful: 6,
      verified: true
    },
    {
      id: 4,
      name: "Khadija Ahmed",
      rating: 5,
      title: "Excellent Customer Service",
      review: "Not only is the abaya beautiful, but the customer service was exceptional. I had questions about sizing and they were so helpful. The custom design service is amazing too - they really listen to what you want.",
      product: "Custom Design Service",
      date: "2024-05-05",
      helpful: 15,
      verified: true
    },
    {
      id: 5,
      name: "Zainab Ali",
      rating: 5,
      title: "My Go-To Brand Now",
      review: "I've ordered three abayas from Jamir Fashion and each one has been perfect. The quality is consistent, the designs are modern yet modest, and the prices are reasonable. This is definitely my go-to brand now!",
      product: "Multiple Products",
      date: "2024-05-01",
      helpful: 20,
      verified: true
    },
    {
      id: 6,
      name: "Amina Yusuf",
      rating: 4,
      title: "Beautiful Fabric",
      review: "The fabric quality is really impressive. It's soft, breathable, and drapes beautifully. The only minor issue was with the delivery time, but it was worth the wait. The abaya is exactly what I wanted.",
      product: "Light Khaki Open Abaya",
      date: "2024-04-28",
      helpful: 4,
      verified: true
    }
  ];

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(filterRating));

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your review! It will be published after moderation.');
    setNewReview({
      name: '',
      email: '',
      rating: 5,
      title: '',
      review: '',
      product: ''
    });
    setShowReviewForm(false);
  };

  const handleInputChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    });
  };

  const renderStars = (rating, size = 'w-5 h-5') => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600">
            See what our customers are saying about their Jamir Fashion experience
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Rating Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Overall Rating</h2>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <p className="text-gray-600">Based on {reviews.length} reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 w-8">{rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${(ratingCounts[index] / reviews.length) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{ratingCounts[index]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter Reviews
              </h3>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>

            {/* Write Review Button */}
            <Button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Write a Review
            </Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Review Form */}
            {showReviewForm && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Write Your Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={newReview.name}
                      onChange={handleInputChange}
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={newReview.email}
                      onChange={handleInputChange}
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    name="product"
                    placeholder="Product Name"
                    value={newReview.product}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Review Title"
                    value={newReview.title}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea
                    name="review"
                    placeholder="Write your review..."
                    value={newReview.review}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <div className="flex space-x-4">
                    <Button type="submit">Submit Review</Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowReviewForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {renderStars(review.rating, 'w-4 h-4')}
                        </div>
                        <span className="text-sm text-gray-600">{review.date}</span>
                      </div>
                      <p className="text-sm text-purple-600">{review.product}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-4">{review.review}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <button className="flex items-center space-x-1 hover:text-purple-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-purple-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No reviews found for the selected rating.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

