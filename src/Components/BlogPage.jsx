import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogPage = () => {
  const data = useLocation()
  console.log( data.state );
  return (
    <div>
      <div className='blogImg' style={{ backgroundImage : `url("${data.state.img}")` }}>

      </div>
      <div className='blogContent'>
      <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab labore officia eius dolore dignissimos optio molestiae voluptatum a omnis, repudiandae non consequatur accusamus fugit, qui minus deserunt velit reiciendis pariatur dolorum illo nihil. Vel cupiditate est maiores quo tempore? </span> <br /> <br />
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit non reiciendis nihil repudiandae consequatur expedita, laudantium dolore maiores tempore molestiae laborum amet esse labore dolorem iusto libero neque numquam nisi ratione vel accusamus! Consequuntur dolorum, quidem cum a quaerat recusandae veritatis adipisci dignissimos, illum officia rem asperiores sequi porro assumenda nisi voluptatem accusantium natus magnam? Ex, in. Quibusdam illum odit distinctio nisi recusandae quaerat voluptatum libero, cumque laborum accusamus numquam obcaecati ullam et similique mollitia dignissimos porro. Aliquam eligendi quia voluptas officiis autem! Repellat blanditiis autem id ipsum. Velit ullam praesentium quae sunt corrupti aut ipsum culpa nostrum, minima, iusto quo reiciendis cumque libero voluptatum dolorem perspiciatis ratione distinctio dolore eius harum assumenda? Voluptas voluptatem dolore quas pariatur expedita?</span> <br /> <br />

      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat assumenda minima totam repellendus id dolorem iusto temporibus ipsum doloribus voluptate ullam at saepe odio, quaerat, ex corrupti praesentium veniam quam, ipsam et unde distinctio aperiam omnis. Consequatur iusto error placeat suscipit perferendis at ad modi nulla quod repellat aperiam tempore ducimus dignissimos architecto doloribus magni aut, voluptate ipsa quia accusantium, repudiandae voluptas expedita pariatur molestiae! Modi atque ullam nesciunt ea mollitia consectetur, dignissimos eligendi omnis placeat veniam, illo natus similique enim esse earum animi maxime vero officia! Totam neque voluptate omnis dicta qui provident velit quis vel harum. Nam odit quis obcaecati laboriosam aut, ullam nisi corporis molestias quidem blanditiis.</span>
    </div>
    </div>
  )
}

export default BlogPage
