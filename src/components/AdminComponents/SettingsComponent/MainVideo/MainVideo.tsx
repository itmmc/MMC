import React from 'react'

const MainVideo = () => {
  return (
    <div className="form_sides f small_fc  f-c  light_bg     "
    >
    <div className="form_side   pt-30 ">
        <div className="section_head f pt-custom  ">
         

            <p className=""> Upload Your  Main Video</p>
        </div>

  
        <form
      
        >
            <div className="custom-form-set f  px-30   a-c ">
              

            <div className="custom-btn-container f s-b  ">
                    <input type="file" name="CV" required placeholder="Upload you CV"/>
                    <div className="upload full_bg f a-c j-e">
                    <div className="custom-btn light_brown_bg interactive_label f a-c j-c pointer">
                            <strong className="_txt words">Upload Logo</strong>
                        </div>
                    </div>
                  
                </div>

             
         

        

           

                <div className="input_set f s-b ">
                    <input type="submit" className="submit_form" />
                    <div className="custom-btn primary_bg f a-c j-c pointer submit interactive_label">
                        <strong className="uppercase _txt words">
                            Save
                        </strong>
                        <div className="done transit-all">
                            <svg
                                width="17"
                                height="12"
                                viewBox="0 0 17 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.4688 0.871094C16.8203 1.22266 16.8203 1.75 16.4688 2.06641L7.1875 11.3477C6.87109 11.6992 6.34375 11.6992 6.02734 11.3477L1.24609 6.56641C0.894531 6.25 0.894531 5.72266 1.24609 5.37109C1.5625 5.05469 2.08984 5.05469 2.40625 5.37109L6.625 9.58984L15.3086 0.871094C15.625 0.554687 16.1523 0.554687 16.4688 0.871094Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default MainVideo