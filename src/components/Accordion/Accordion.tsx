"use client"

import { products } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { down, up } from '../../../public'
import './AccordionStyles.css'

export default function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i : any ) =>{
        if (selected === i ) {
            return setSelected(null)
        }

        setSelected(i)
    }
  return (
    <div className='accordion'>
        <div className='wrapper'>
            {products.map((product, i) => (
                <div key={product.id} className='item'>
                    <div className='title' onClick={() => toggle(i)}>
                        <h2>{product.title}</h2>
                        <Image src={selected === i ? down : up} alt='navigation' />
                    </div>
                    <div className={`${selected === i ? 'content-show' : 'content'} content-main`}>
                        {product.content}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
