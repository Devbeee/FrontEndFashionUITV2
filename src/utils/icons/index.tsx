import { LiaPhoneSolid } from 'react-icons/lia'
import { CiLocationOn } from 'react-icons/ci'
import { BsSearch, BsSortDown } from 'react-icons/bs'
import { SlUser } from 'react-icons/sl'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaGift, FaPlus, FaFilter } from 'react-icons/fa6'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { CiSettings } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'
export const icons = {
  phone: <LiaPhoneSolid />,
  location: <CiLocationOn />,
  search: <BsSearch />,
  user: <SlUser />,
  shoppingBag: <HiOutlineShoppingBag />,
  gift: <FaGift />,
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  youtube: <FaYoutube />,
  instagram: <FaInstagram />,
  settings: <CiSettings />,
  eye: <IoEyeOutline />,
  sortDecreasing: <BsSortDown />,
  x: <FiX />,
  nextPage: <GrNext />,
  prevPage: <GrPrevious />,
  plus: <FaPlus />,
  filter: {
    white: <FaFilter className='text-white' />,
    darkBlue: <FaFilter className='text-text-dark-blue' />
  }
}
