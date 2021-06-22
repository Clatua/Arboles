class ArbolBinario
{
    constructor (numero)
    {
        this.raiz=numero;
        this.hijoIzq=null;
        this.hijoDer=null;
    }
    

    Agregar(nuevo)
    {
        if (this.raiz==null)
        this.raiz=nuevo;
        else
        this.queTeAtienda(nuevo, this.raiz);
    }
    queTeAtienda(nuevo, nodo)
    {
        if (nuevo>nodo)
            if (nodo.hijoIzq==null)
                nodo.hijoIzq=nuevo;
            else
                this.queTeAtienda(nuevo, nodo.hijoIzq);
        else
            if (nodo.hijoDer==null)
                nodo.hijoDer=nuevo;
            else
                this.queTeAtienda(nuevo, nodo.hijoDer);
    }


    InOrder()
    {
        if (this.raiz==null)
            console.log("");
        else
             this.ProcesaInOrder(this.raiz);
    }   
    ProcesaInOrder(nodo)  //I R D 
    {
        if (nodo.hijoIzq!=null)  //I
            this.ProcesaInOrder(nodo.hijoIzq);
        console.log(nodo);  // R
        if (nodo.hijoDer!=null)  //D
            this.ProcesaInOrder(nodo.hijoDer);
    }


    PreOrder()
    {
        if (this.raiz==null)
            console.log("");
        else
            this.ProcesaPreOrder(this.raiz);
    }    
    ProcesaPreOrder(nodo)  //R I D 
    {
        console.log(nodo);  // R
        if (nodo.hijoIzq!=null)  //I
            this.ProcesaPreOrder(nodo.hijoIzq);
        if (nodo.hijoDer!=null)  //D
            this.ProcesaPreOrder(nodo.hijoDer);
    }


    PostOrder()
    {
        if (this.raiz==null)
            console.log("");
        else
             this.ProcesaPostOrder(this.raiz);
    }    
    ProcesaPostOrder(nodo)  //I D R
    {
        
        if (nodo.hijoIzq!=null)  //I
            this.ProcesaPostOrder(nodo.hijoIzq);
        if (nodo.hijoDer!=null)  //D
            this.ProcesaPostOrder(nodo.hijoDer);
        console.log(nodo);  // R
    }
}
const chalk=require("chalk");

console.log(chalk.red("prueba"));