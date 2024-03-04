import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import carusel from '../../assets/image/carusel.png'
import carusel2 from '../../assets/image/carusel2.png'

import Product from '../product/Product';

import './Home.css'

const API_CATEGORY = "http://178.128.162.248:8070/api/v1/category/categories/"
const API = "http://178.128.162.248:8070/api/v1/advertisement/ads"

function Home() {
    const [category,setCategory] = useState([])
    const [product,setProduct] = useState([])

    async function getCategory() {
        try{
            const res = await axios.get(API_CATEGORY)

            setCategory(res.data)

            // console.log(res)
        }catch(error){
            console.log(error)
        }
    }

    async function getProduct() {
        try{
            const res = await axios.get(API)
            setProduct(res.data.results)

            console.log(res)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory()
        getProduct()
    },[])

  return (
    <div>
        <section className='home container'>
            <div className='home-sidebar'>
            <ul>
                        {
                            category.map((item) => (
                                <li key={item.id}>{item.title_kg}</li>
                            ))
                        }
                </ul>
            </div>
            <div className='home-carusel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={carusel}/>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src={carusel2}/>
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={carusel}/>
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
        <section className='sell container'> Скидки и распродажи</section>
        <section className='home-product container'>
            {
                product.map((item) => (
                    <Product key={item.id} data={item}/>
                ))
            }
        </section>
    </div>
  )
}

export default Home