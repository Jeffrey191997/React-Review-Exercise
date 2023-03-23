import '../style/gallery.css'

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery-header">Gallery</h2>
      <ul className='gallery-list'>
        <li className='gallery-img'><img width={200} src="assets/pic1.jpeg" alt="" /></li>
        <li className='gallery-img'><img width={200} src="assets/pic1.jpeg" alt="" /></li>
        <li className='gallery-img'><img width={200} src="assets/pic1.jpeg" alt="" /></li>
      </ul>
    </section>
  )
};

export default Gallery;