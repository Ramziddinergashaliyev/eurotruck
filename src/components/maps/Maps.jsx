import React from 'react'
import "./maps.scss"

const Maps = () => {
  return (
    <div className='maps' style={{ position: "relative", overflow: "hidden" }}>
      <a href="https://yandex.uz/maps/org/116799243047/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Exzap</a>
      <a href="https://yandex.uz/maps/105813/tashkent-province/category/production_of_auto_parts/184105290/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Производство автозапчастей в Ташкентской области</a>
      <a href="https://yandex.uz/maps/105813/tashkent-province/category/lubricants/184106702/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "28px" }}>Смазочные материалы в Ташкентской области</a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.2044379497615!2d69.1446812!3d41.2257419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6394c3db731b%3A0xaf34a61d7f7be5bc!2sExzap%20Truck!5e0!3m2!1sru!2s!4v1708019978752!5m2!1sru!2s"
        frameBorder="0"
        allowFullScreen={true}
        style={{ position: "relative", width: "100%", height: "300px" }}
      />
    </div>
  )
}

export default Maps