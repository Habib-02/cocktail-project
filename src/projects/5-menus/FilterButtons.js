function FilterButtons({ uniqueCategory, filterHandler }) {
  return (
    <div className="btn-container">
      {uniqueCategory.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterHandler(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default FilterButtons
