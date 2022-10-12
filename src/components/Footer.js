
const Footer = () => {
  return (
     
      <footer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>6 items left</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
              <a style={{ color: 'black', }}>All</a>
              <a style={{ color: 'black' }}>Active</a>
              <a style={{ color: 'black' }}>Completed</a>
            </div>
            <div></div>
          </div>
      </footer>
    
  )
}

export default Footer
