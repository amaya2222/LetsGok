import React from 'react'

function ContactUs() {
    return (
        <div class="container contact-form" style={{marginTop:'40px'}}>
                
        <form method="post">
            <h1>Drop Us a Message</h1>
           <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                    </div>
               
                    <div class="form-group">
                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: '100%' ,height:'150px'}}></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                    </div>
                </div>   
            
            </div>
        </form>
    </div>
    )
}

export default ContactUs
