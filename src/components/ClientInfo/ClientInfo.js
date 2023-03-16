import React, { useContext, useState} from "react";
import ClientInfoForm from "./ClientInfoForm";
import Card from "../UI/Card/Card";
import classes from "./ClientInfo.module.css";
import CartContext from "../../store/cart-context";
import Client from "./Client";

export default function ClientInfo() {
    const cartCtx = useContext(CartContext)
    const [hasClient, sethasClient] = useState(false);
    

  const addClientHandler = (client) => {
    cartCtx.addClient(client);
    sethasClient(true)
    
  };
  
  
  

  return (
    <section className={classes.content}>
      <Card>
        
        <section className={classes.info}>
        
          <ClientInfoForm onAddClient={addClientHandler}></ClientInfoForm>
          {hasClient && <Client client = {cartCtx.client}></Client>}
        </section>
      </Card>
    </section>
  );
}
