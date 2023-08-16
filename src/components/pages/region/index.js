import axios from "axios";
import { useState,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";

let Region = ()=>{
    const [data,setData]=useState([{}]);
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(false);
    const [editData,setEditData] =useState([{}]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:8088/api/region',
          })
            .then((response)=> {
              setData(response.data.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[status])    
    
    const onSubmit=()=>{
        handleClose();
        let data={
            "region_id":id,
            "name":name
        }
        axios({
            method: 'POST',
            url: 'http://localhost:8088/api/region',
            headers:{
                'Content-Type':'application/json',
            },
            data: JSON.stringify(data)
          })
            .then((response)=> {
              if (response.status === 200) {
                setStatus(true)
                window.location.reload(true)
              }
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            setStatus(false)
        })
    }

    const deleteRegion =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor:  '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                axios({
                    method: 'DELETE',
                    url: 'http://localhost:8088/api/region/'+id,
                  })
                    .then((response)=> {
                        if(response.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Sucess!!!',
                                text: 'Data has been deleted !'
                            })
                            setStatus(true);
                            window.location.reload(true)
                        }
                }).catch((error)=>{
                    console.log(error);
                }).finally(()=>{
                    setStatus(false)
                })
            }
        })
       
    }

    const editRegion = (dataRegion) => {
        setEditData(dataRegion);
        setId(dataRegion.region_id);
        setName(dataRegion.name);
        handleShow();
      }
    
    return(
        <div>
            <Button onClick={handleShow}>CREATE</Button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x=>{
                        return (
                            <tr key={x.region_id}>
                                <td>{x.region_id}</td>
                                <td>{x.name}</td>
                                <td> 
                                    <a href="#" onClick={()=>editRegion(x)} className="btn btn-warning btn-sm">EDIT</a> |
                                    <a onClick={()=>deleteRegion(x.region_id)} className="btn btn-danger btn-sm">DELETE</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3"  >
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" placeholder="Insert Id" onChange={e=>setId(e.target.value)} value={id} id="id" name="region_id" autoComplete="off" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Insert Name" onChange={e=>setName(e.target.value)} value={name} id="name" name="name" autoComplete="off" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
    )
}

export default Region;