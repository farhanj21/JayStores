import React from 'react'
import Image from 'next/image'
import img from '../src/assets/feature.png'
import Link from 'next/link'

const FeaturesBanner = () => {
  return (
    <section className='features-section'>
      <div className='title'>
        <h1>Jay Stores' Own Fashion</h1>
      </div>

      <div className='content'>
        <div className='left'>
          <div className="feature-background">
            Unique in All Aspects
          </div>
          <div>
  <h3>100% Handmade Products</h3>
  <p>Each piece is crafted with care, ensuring uniqueness and exceptional quality.</p>
</div>
<div>
  <h3>Using Good Quality Materials</h3>
  <p>We source only the finest materials to create durable and comfortable clothing.</p>
</div>
<div>
  <h3>Discount for Bulk Orders</h3>
  <p>Enjoy significant savings when you order in bulk, perfect for group purchases or businesses.</p>
</div>
<div>
  <h3>Modern Fashion Design</h3>
  <p>Stay ahead of the trends with our contemporary and stylish designs.</p>
</div>

        </div>

        <div className='right'>
          <Image src={img} width={300} height={350} alt='img' />
          <div>
            <p>This pair of jeans is ethically crafted in our small family-owned workshop, with unmatched attention to detail and care. The denim's natural color is achieved without dye, maintaining its 100% traceable origins.</p>
            <Link href={'/products'}>
              <button className='btn' type='button'>See All Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBanner