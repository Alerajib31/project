import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What is the best time to visit Nepal?',
      answer: 'The best time to visit Nepal is during the autumn season (September to November) when the weather is clear and stable with excellent mountain views. Spring (March to May) is also a good time with pleasant temperatures and blooming rhododendrons. Winter (December to February) can be cold but offers clear skies, while summer/monsoon (June to August) brings rain but lush landscapes.',
      category: 'general'
    },
    {
      id: 2,
      question: 'Do I need a visa to visit Nepal?',
      answer: 'Yes, most nationalities require a visa to enter Nepal. You can obtain a tourist visa on arrival at Tribhuvan International Airport in Kathmandu or at land border crossings. Alternatively, you can apply for an e-visa online before your trip. The visa fees vary depending on the duration of your stay (15, 30, or 90 days). Make sure your passport is valid for at least 6 months beyond your intended stay.',
      category: 'visa'
    },
    {
      id: 3,
      question: 'What permits do I need for trekking in Nepal?',
      answer: 'For most popular trekking routes, you need two permits: the TIMS (Trekkers\'  Information Management System) card and a conservation/national park entry permit specific to the region you\'re visiting. For restricted areas like Upper Mustang or Dolpo, additional special permits are required. Our team at Roots & Routes Tours & Travels will arrange all necessary permits for you when you book a trek with us.',
      category: 'trekking'
    },
    {
      id: 4,
      question: 'How physically fit do I need to be for trekking in Nepal?',
      answer: 'The required fitness level depends on the trek you choose. For easy treks like Ghorepani Poon Hill, moderate fitness is sufficient. For more challenging treks like Everest Base Camp or Annapurna Circuit, good physical fitness is necessary. We recommend preparing with cardiovascular exercises, hiking, and strength training for at least 2-3 months before your trek. We offer treks for all fitness levels and can recommend the best option based on your capabilities.',
      category: 'trekking'
    },
    {
      id: 5,
      question: 'What is the accommodation like during treks?',
      answer: 'On most popular trekking routes, you\'ll stay in teahouses or mountain lodges. These provide basic but comfortable accommodation with twin beds, shared bathrooms, and common dining areas. In remote areas, accommodation is more basic. For luxury trekking, we offer premium lodge treks with better facilities. Camping treks are also available for off-the-beaten-path routes where teahouses don\'t exist.',
      category: 'trekking'
    },
    {
      id: 6,
      question: 'Is it safe to drink water in Nepal?',
      answer: 'Tap water in Nepal is not safe to drink. During your stay in cities, stick to bottled water or purified water. While trekking, you can buy bottled water at teahouses (though prices increase with altitude), use water purification tablets, or bring a reliable water filter/purifier. Many teahouses also sell boiled water which is safe to drink. We encourage environmentally friendly water purification methods to reduce plastic waste.',
      category: 'health'
    },
    {
      id: 7,
      question: 'What vaccinations do I need for Nepal?',
      answer: 'While no vaccinations are legally required to enter Nepal, several are recommended: Hepatitis A and B, Typhoid, Tetanus, and COVID-19. Depending on your activities and areas visited, you might also consider Japanese Encephalitis, Rabies, and Influenza vaccines. Consult your healthcare provider or a travel medicine specialist at least 4-6 weeks before your trip for personalized advice based on your medical history and travel plans.',
      category: 'health'
    },
    {
      id: 8,
      question: 'What currency is used in Nepal and can I use credit cards?',
      answer: 'The Nepalese Rupee (NPR) is the local currency. You can exchange major currencies at banks, hotels, and authorized money changers in cities. ATMs are widely available in urban areas but may have withdrawal limits. Credit cards are accepted at upscale hotels, restaurants, and shops in major cities, but cash is necessary for rural areas and trekking regions. We recommend carrying some cash in small denominations, especially when traveling outside Kathmandu and Pokhara.',
      category: 'money'
    },
    {
      id: 9,
      question: 'How much should I tip guides and porters?',
      answer: 'Tipping is customary in Nepal\'s tourism industry. For trekking guides, the recommended tip is $10-15 per day, and for porters, $5-8 per day. For city tour guides, $10-15 per day is appropriate. These are guidelines, and the actual amount can vary based on your satisfaction with the service. Tips are typically given at the end of your trek or tour. While not mandatory, tips are an important source of income for tourism workers.',
      category: 'money'
    },
    {
      id: 10,
      question: 'What should I pack for a trek in Nepal?',
      answer: 'Essential items include: good hiking boots, moisture-wicking clothing, warm layers (fleece, down jacket), waterproof jacket and pants, thermal underwear, hiking socks, hat, gloves, sunglasses, sunscreen, headlamp, water bottles/hydration system, sleeping bag (can be rented), basic first aid kit, toiletries, and trekking poles. Pack light as you\'ll either carry your gear or pay a porter by weight. We provide a detailed packing list specific to your trek and season when you book with us.',
      category: 'trekking'
    },
    {
      id: 11,
      question: 'Is travel insurance necessary?',
      answer: 'Yes, comprehensive travel insurance is essential and required for all our tours and treks. Your policy should cover medical emergencies, helicopter evacuation (for treks), trip cancellation, and lost/stolen belongings. For high-altitude treks, ensure your policy covers activities above 3,000m. We recommend purchasing insurance that specifically covers trekking/mountaineering in Nepal. We can suggest reliable insurance providers suitable for your specific activities.',
      category: 'general'
    },
    {
      id: 12,
      question: 'How do I deal with altitude sickness while trekking?',
      answer: 'To prevent altitude sickness: ascend slowly (no more than 300-500m elevation gain per day above 3,000m), stay hydrated, avoid alcohol, take acclimatization days, and consider preventive medication like Diamox (consult your doctor). Recognize symptoms: headache, nausea, dizziness, fatigue, loss of appetite, and disturbed sleep. If symptoms appear, stop ascending, rest, and descend if symptoms worsen. Our experienced guides are trained to monitor for altitude sickness and make appropriate decisions for your safety.',
      category: 'health'
    },
    {
      id: 13,
      question: 'Can you arrange custom itineraries?',
      answer: 'Absolutely! We specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Whether you want to combine trekking with cultural tours, add specific activities, adjust trek durations, or create a completely unique experience, our team can design the perfect itinerary for you. Contact us with your preferences, and we\'ll work with you to craft a personalized journey that meets your expectations.',
      category: 'booking'
    },
    {
      id: 14,
      question: 'What is your cancellation policy?',
      answer: 'Our standard cancellation policy is: 100% refund for cancellations 30+ days before departure (minus transaction fees), 70% refund for cancellations 15-29 days before departure, 50% refund for cancellations 8-14 days before departure, and no refund for cancellations within 7 days of departure. Different terms may apply for peak season bookings or special arrangements. We offer more flexible terms for cancellations due to unexpected emergencies. Please refer to your booking confirmation for specific terms.',
      category: 'booking'
    },
    {
      id: 15,
      question: 'Is Nepal safe for solo female travelers?',
      answer: 'Nepal is generally considered safe for solo female travelers. Nepalese people are known for their hospitality and friendliness. However, as with travel anywhere, certain precautions are advisable: dress modestly (especially in rural areas), be cautious in isolated areas after dark, and be aware of cultural sensitivities. Many women trek solo on popular routes like Annapurna and Everest. We can provide female guides upon request and offer specific safety advice for women traveling alone in Nepal.',
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'trekking', label: 'Trekking' },
    { id: 'health', label: 'Health & Safety' },
    { id: 'visa', label: 'Visa & Documentation' },
    { id: 'money', label: 'Money & Expenses' },
    { id: 'booking', label: 'Booking & Policies' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg"
            alt="Nepal Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-primary-700/50" />
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-neutral-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Find answers to common questions about traveling in Nepal
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 ${activeCategory === category.id 
                  ? 'bg-accent-600 text-white shadow-lg' 
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredFAQs.map((faq) => (
              <motion.div 
                key={faq.id}
                className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={`w-full flex justify-between items-center p-5 text-left font-medium ${openItems.includes(faq.id) 
                    ? 'bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300' 
                    : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white'}`}
                >
                  <span className="text-lg">{faq.question}</span>
                  <span>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Still Have Questions */}
          <motion.div 
            className="mt-16 text-center p-8 bg-accent-50 dark:bg-accent-900/20 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-accent-700 dark:text-accent-300 mb-4">Still Have Questions?</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">Can't find the answer you're looking for? Please contact our friendly team.</p>
            <a 
              href="/contact" 
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;