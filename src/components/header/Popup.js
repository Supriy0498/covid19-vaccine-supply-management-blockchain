import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import React from "react";
import ActionButton from "../controls/ActionButton";

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <div>
            <Dialog open={openPopup} maxWidth="md">
                <DialogTitle>
                    <div style={{display:'flex'}}>
                        <Typography variant="h6" component="div" style={{flexGrow:1}}>
                            {title}
                        </Typography>
                        <ActionButton 
                        onClick = { () => {setOpenPopup(false)}}
                        />
                    </div>
                </DialogTitle>
                
                <DialogContent dividers>
                    <div>
                        {children}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}