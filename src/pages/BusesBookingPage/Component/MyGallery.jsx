import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'


const MyGallery = () => (
  <Gallery>
    <Item
      original="https://toppng.com/uploads/preview/university-express-bus-charter-bus-11563557541eiqi1hyxav.png"
      thumbnail="https://toppng.com/uploads/preview/university-express-bus-charter-bus-11563557541eiqi1hyxav.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} className='rounded-xl w-full h-3/4' onClick={open} src="https://toppng.com/uploads/preview/university-express-bus-charter-bus-11563557541eiqi1hyxav.png" />
      )}
    </Item>
    <Item
      original="https://cdnphoto.dantri.com.vn/6vRcGW6nv-XwSIrbC5hhMeRR8_Y=/thumb_w/960/2020/09/30/hanh-trinh-20-nam-van-tai-hanh-khach-cua-hang-xe-phuong-trang-docx-1601431160071.png"
      thumbnail="https://cdnphoto.dantri.com.vn/6vRcGW6nv-XwSIrbC5hhMeRR8_Y=/thumb_w/960/2020/09/30/hanh-trinh-20-nam-van-tai-hanh-khach-cua-hang-xe-phuong-trang-docx-1601431160071.png"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} className='rounded-xl' style={{ minWidth: '30%', maxWidth: '30%' }} onClick={open} src="https://cdnphoto.dantri.com.vn/6vRcGW6nv-XwSIrbC5hhMeRR8_Y=/thumb_w/960/2020/09/30/hanh-trinh-20-nam-van-tai-hanh-khach-cua-hang-xe-phuong-trang-docx-1601431160071.png" />
      )}
    </Item>
    <Item
      original="https://vinbus.vn/storage/photos/26/Tin%20t%E1%BB%A9c/DSC6562-JPG.jpg"
      thumbnail="https://vinbus.vn/storage/photos/26/Tin%20t%E1%BB%A9c/DSC6562-JPG.jpg"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} className='rounded-xl' style={{ minWidth: '30%', maxWidth: '30%' }} onClick={open} src="https://vinbus.vn/storage/photos/26/Tin%20t%E1%BB%A9c/DSC6562-JPG.jpg" />
      )}
    </Item>
    <Item
      original="https://static.vexere.com/production/images/1596171221156.jpeg"
      thumbnail="https://static.vexere.com/production/images/1596171221156.jpeg2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} className='rounded-xl' style={{ minWidth: '30%', maxWidth: '30%' }} onClick={open} src="https://static.vexere.com/production/images/1596171221156.jpeg" />
      )}
    </Item>
  </Gallery>
)

export default MyGallery