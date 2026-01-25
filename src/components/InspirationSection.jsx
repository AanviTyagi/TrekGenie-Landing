import React from 'react';


const InspirationSection = () => {
  const posts = [
    {
      date: '04/30/2025',
      title: 'Trekking Expeditions in India',
      description: 'Embark on the ultimate adventure with our comprehensive guide to trekking expeditions in India. Discover routes that challenge and inspire.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      link: 'https://scoutripper.com/blog/trekking-expeditions-in-india/'
    },
    {
      date: '02/18/2025',
      title: 'Winter Treks to Do in India',
      description: 'Experience the magic of snow-covered peaks and frozen lakes. Winter trekking in the Himalayas transports you to a pristine wonderland.',
      image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80',
      link: 'https://scoutripper.com/blog/winter-treks-to-do-in-india/'
    },
    {
      date: '03/15/2025',
      title: 'DIY Treks in India',
      description: 'Prefer the path less traveled? Learn how to plan and execute your own Do-It-Yourself treks safely and effectively across India.',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
      link: 'https://scoutripper.com/blog/diy-treks-in-india/'
    },
    {
      date: '01/10/2025',
      title: 'Beginner Treks in India',
      description: 'New to trekking? Start your journey with these beginner-friendly trails that offer breathtaking views without requiring expert skills.',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
      link: 'https://scoutripper.com/blog/beginner-treks-in-india/'
    }
  ];

  return (
    <section className="bg-white py-[60px] text-slate-900 font-sans border-t border-gray-100">
       <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
          <div className="mb-10">
            <h2 className="text-[2.2rem] font-semibold text-[#324b4c] leading-none mb-2">Get inspiration for your next trip</h2>
            <p className="text-gray-500">Experience the nature with our words.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[40px]">
             {posts.map((post, index) => (
                <a href={post.link} target="_blank" rel="noopener noreferrer" key={index} className="group flex flex-col sm:flex-row gap-[20px] items-start hover:bg-transparent">
                   {/* Image */}
                   <div className="w-full sm:w-[260px] h-[260px] flex-shrink-0 overflow-hidden rounded-[4px]">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                   </div>
                   
                   {/* Content */}
                   <div className="flex flex-col pt-2">
                      <span className="text-[14px] text-gray-500 mb-2">{post.date}</span>
                      <h3 className="text-[20px] font-bold text-[#1A2B48] mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                        {post.title} · Scoutripper
                      </h3>
                      <p className="text-[#697488] text-[15px] leading-relaxed">
                         {post.description}
                      </p>
                   </div>
                </a>
             ))}
          </div>
       </div>
    </section>
  );
};

export default InspirationSection;
