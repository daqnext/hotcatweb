import React from "react";

class ListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state=
        {
            
        }      
    }

    render() {

               return (
                    <div class="col-sm-12 col-md-3" style={{ marginBottom:'20px' }} >
                        <div class="box">
                            <div class="item">
                                <div class="item-bg light rounded-top">
                                    <p class="p-3">"We are creating a awesome video streaming!"</p>
                                </div>
                                <div class="py-5 px-3 pos-rlt">
                                    <img src="/assets/images/hotcat.png" alt="." class="circle w-56" style={{marginBottom:'-7rem',background:'white',border:'1px solid #243240'}} />
                                </div>
  
                            </div>
                            <div class="p-3">
                                <a href="#" class="text-md mt-3 d-block">Jason Warren</a>
                                <p>
                                    <small>London, UK</small>
                                </p>
                                <p>
                                    
                                </p>
                                <div class="text-xs">
                                    <i class="fa fa-fw fa-twitter"></i>
                                    <strong>540</strong>
                                    <i class="fa fa-fw fa-facebook ml-2"></i>
                                    <strong>560</strong>
                                </div>
                            </div>
                        </div>
                </div>
               );

    }
}

export default ListItem;