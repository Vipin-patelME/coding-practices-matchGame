import './index.css'

const ImojiItems = props => {
  const {eachImoji, changeImage} = props
  const {id, imageUrl, thumbnailUrl} = eachImoji

  const onChangeRandomImage = () => {
    changeImage(id)
  }
  return (
    <li>
      <button
        onClick={onChangeRandomImage}
        type="button"
        className="thumbnail-btn"
      >
        <img src={thumbnailUrl} className="thumbnail-style" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImojiItems
