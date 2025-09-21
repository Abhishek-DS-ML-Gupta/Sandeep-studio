import React from 'react';

const imageData = [
  { id: 1, url: 'https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kaWFuJTIwd2VkZGluZyUyMHBob3RvfGVufDB8fDB8fHww', alt: 'Wedding photo' },
  { id: 2, url: 'https://images.unsplash.com/photo-1729107861458-559daeaf2133?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwTWF0ZXJuaXR5JTIwUGhvdG98ZW58MHx8MHx8fDA%3D', alt: 'Maternity photo' },
  { id: 3, url: 'https://media.istockphoto.com/id/1148565327/photo/family-celebrating-kids-birthday.webp?a=1&b=1&s=612x612&w=0&k=20&c=zmreiKu8NJr1NE7RkOsqYbZp-9Y8SWD6AgqG4NBJBew=', alt: 'Birthday photo' },
  { id: 4, url: 'https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA=', alt: 'Portrait photo' },
  { id: 5, url: 'https://media.istockphoto.com/id/1254346911/photo/comfortable-baby.jpg?s=612x612&w=0&k=20&c=YuGs2W72IKYaN9ta-iZikz5GhO7x1sJWV4vUBsl_8nU=', alt: 'Newborn photo' },
  { id: 6, url: 'https://media.istockphoto.com/id/2164408668/photo/tamil-pickers-collecting-tea-leaves-on-plantation-southern-india.jpg?s=612x612&w=0&k=20&c=Y22caeejrXxYQMsAOuRO3gzjGlrYEg0CdpBvriAI4Zc=', alt: 'Candid photo' },
  { id: 7, url: 'https://images.unsplash.com/photo-1743685102554-ef8e4eb11415?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcHJlJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Pre-wedding photo' },
  { id: 8, url: 'https://images.unsplash.com/photo-1743685334937-fff33b849384?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZW5nYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D', alt: 'Engagement' },
];

function ImageGrid() {
  return (
    <div className="image-grid-container">
      {imageData.map(image => (
        <div key={image.id} className="grid-item">
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;