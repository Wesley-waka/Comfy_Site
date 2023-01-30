import React from 'react'
import styled from 'styled-components'
import { FaTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ListView = ({ products }) => {


  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    company: "",
    description: "",
    category: "",
    shipping: "",


  })


  // console.log(products.id);

  //to respond on user change
  function handleChange(event) {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8001/furniture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        formData
      ),
    }).then((response) => response.json())
      .then((newPost) => {
        setFormData(newPost)
      });
  }




  return (
    <Wrapper>
      <form className="row p-3" onSubmit={handleSubmit}>
        <div className="col-3">
          <input
            name="date"
            onChange={handleChange}
            // value={formData.name}
            className="form-control"
            placeholder="Furniture name"

          />
        </div>
        <div className="col-3">
          <input
            name="description"
            onChange={handleChange}
            // value={formData.price}
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="col-3">
          <input
            name="category"
            onChange={handleChange}
            // value={formData.image}
            className="form-control"
            placeholder="Image url"
          />
        </div>
        <div className="col-3">
          <input
            name="amount"
            onChange={handleChange}
            // value={formData.company}
            className="form-control"
            placeholder="Company"
          />
        </div>
        <div className="col-3">
          <input
            name="amount"
            onChange={handleChange}
            // value={formData.shipping}
            className="form-control"
            placeholder="Shipping"
          />
        </div>
        <div className="col-3">
          <input
            name="amount"
            onChange={handleChange}
            // value={formData.category}
            className="form-control"
            placeholder="Category"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" >SUBMIT</button>
        </div>
      </form>

      {products.map((product) => {
        const { id, image, name, price, description } = product
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{`KES ${price}`}</h5>
              <p>{description}...</p>
              <Link to={`/products/${id}`} className='btn'>
                ADD TO CART
              </Link>

            </div>
            <button onClick={() => {
              fetch(`http://localhost:8001/furniture/${id}`, {
                method: "DELETE"
              })
            }}><FaTimesCircle /></button>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
`

export default ListView
