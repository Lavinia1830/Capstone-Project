import React from 'react'
import SearchComponent from './SearchComponent'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  
  const { t } = useTranslation();
  
  return (
    <>
      <div className='bg-footer py-3'>
        <SearchComponent/>
        <div className=' d-flex justify-content-center text-white'>
          <p className='fw-bold mb-0'>© 2025 Le Guide d’Italia</p>
        </div>
      </div>
    </>
  )
}
