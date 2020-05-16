import React, { useState } from 'react'
import { Container, Form, Input, Button } from './styles'
import { useDispatch } from 'react-redux'
import { sendImage, setImageUrl } from '../../redux/imageSlice'

const ImageLinkForm = () => {
  const [input, setInput] = useState('')
  const [displayImageUrl, setDisplayImageUrl] = useState('');
  const dispatch = useDispatch()

  const handleDetect = () => {
    setDisplayImageUrl(input);
    dispatch(setImageUrl(input))
    dispatch(sendImage(input))
    setInput('');
  }


  return (
    <Container>
      <a href={displayImageUrl}>{displayImageUrl}</a>
      <Form>
        <Input type='text' onChange={e => setInput(e.target.value)} />
        <Button onClick={handleDetect}>Detect</Button>
      </Form>
    </Container>
  )
}

export default ImageLinkForm
