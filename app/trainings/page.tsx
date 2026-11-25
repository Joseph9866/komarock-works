"use client";

import { useState } from "react";
import { trainingCourses } from "@/lib/data";
import { Clock, Award } from "lucide-react";

export default function TrainingsPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleRegister = (courseId: string) => {
    setSelectedCourse(courseId);
    setShowPaymentModal(true);
  };

  return (
    <>
      <section className="bg-deep-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">Trainings & Sponsored Short Courses</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Practical, career-ready skills development programs designed for creative and business professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-4xl text-deep-navy mb-4">Available Short Courses</h2>
            <p className="text-xl text-muted-gray">
              One-month intensive programs with certificate issuance upon completion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingCourses.map((course) => {
              const availableSpots = course.capacity - course.enrolled;
              const isFull = availableSpots === 0;

              return (
                <div key={course.id} className="bg-off-white rounded-xl overflow-hidden">
                  <div className="bg-deep-navy text-white p-6">
                    <h3 className="font-heading font-bold text-2xl mb-2">{course.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        <span>Certificate Included</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-gray leading-relaxed mb-6">{course.description}</p>

                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-lg text-deep-navy mb-3">Course Modules</h4>
                      <ul className="space-y-2">
                        {course.modules.map((module, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-royal-blue font-semibold mr-2">{idx + 1}.</span>
                            <span className="text-dark-slate">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-dark-slate">Capacity</span>
                        <span className="text-sm text-muted-gray">
                          {course.enrolled} / {course.capacity} enrolled
                        </span>
                      </div>
                      <div className="w-full bg-off-white rounded-full h-2">
                        <div
                          className="bg-royal-blue h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-gray mt-2">
                        {availableSpots} {availableSpots === 1 ? "spot" : "spots"} remaining
                      </p>
                    </div>

                    <div className="bg-sky-blue/10 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-dark-slate">Certificate Issuance Fee</span>
                        <span className="font-heading font-bold text-2xl text-deep-navy">
                          Kshs. {course.certificateFee}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRegister(course.id)}
                      disabled={isFull}
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                        isFull
                          ? "bg-muted-gray text-white cursor-not-allowed"
                          : "bg-royal-blue text-white hover:bg-deep-navy"
                      }`}
                    >
                      {isFull ? "Course Full" : "Register Now"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {showPaymentModal && selectedCourse && (
        <PaymentModal courseId={selectedCourse} onClose={() => setShowPaymentModal(false)} />
      )}
    </>
  );
}

function PaymentModal({ courseId, onClose }: { courseId: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-heading font-bold text-2xl text-deep-navy">Complete Registration</h3>
          <button onClick={onClose} className="text-muted-gray hover:text-deep-navy" aria-label="Close">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="bg-off-white p-6 rounded-lg mb-6">
          <h4 className="font-heading font-bold text-lg text-deep-navy mb-4">M-Pesa Payment Instructions</h4>
          <ol className="space-y-3 text-sm text-dark-slate">
            <li className="flex items-start">
              <span className="bg-royal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">1</span>
              <span>Go to M-Pesa on your phone</span>
            </li>
            <li className="flex items-start">
              <span className="bg-royal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">2</span>
              <span>Select <strong>Lipa na M-Pesa</strong> then <strong>Buy Goods</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-royal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">3</span>
              <span>Enter Till Number: <strong className="text-royal-blue">714888</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-royal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">4</span>
              <span>Enter Account Number: <strong className="text-royal-blue">215097</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-royal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">5</span>
              <span>Enter amount (Kshs. 500 for certificate fee)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-royal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">6</span>
              <span>Confirm with your M-Pesa PIN</span>
            </li>
          </ol>
        </div>

        <div className="bg-sky-blue/10 p-4 rounded-lg mb-6">
          <p className="text-sm text-dark-slate">
            <strong>Course ID:</strong> {courseId}
          </p>
          <p className="text-sm text-dark-slate mt-2">
            After payment, our team will contact you to confirm your enrollment.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
        >
          I&apos;ve Completed Payment
        </button>
      </div>
    </div>
  );
}
