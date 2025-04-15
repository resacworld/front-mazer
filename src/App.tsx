import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ProgressBar,
  Button
} from "./components";
import colors from "./constants/colors";
import HorizontalLayout from "./layouts/HorizontalLayout";
import { useToasts } from './hooks/useToasts';
import "./assets/scss/app.scss"
import { ToastStatus } from './components/Toast';
import "./assets/scss/pages/dashboard.scss"

function App() {
  // const [elements, setElements] = useState<Array<ReactNode>>([])
  const { pushToast } = useToasts();

  return (
    <div className='vw-100 vh-100 overflow-hidden'>
      <HorizontalLayout>
        {/* <Card>
          <CardBody>
            <CardHeader title="All Toasts" />
            <Button label="Info" className="mx-1" onClick={()=>{
              pushToast({
                header: "Some info",
                body: "Hello, world! This is an info toast.",
              })
            }} />
            <Button label="success" className={"mx-1 " + ToastStatus.Success} onClick={()=>{
              pushToast({
                status: ToastStatus.Success,
                header: "Some success",
                body: "Hello, world! This is a success toast.",
              })
            }}/>
            <Button label="Warning" className={"mx-1 " + ToastStatus.Warning} onClick={()=>{
              pushToast({
                status: ToastStatus.Warning,
                header: "Some warning",
                body: "Hello, world! This is a warning toast.",
              })
            }}/>
            <Button label="Error" className={"mx-1 " + ToastStatus.Error} onClick={()=>{
              pushToast({
                status: ToastStatus.Error,
                header: "Some error",
                body: "Hello, world! This is an error toast.",
              })
            }} />
          </CardBody>
          <CardFooter>Im card footer</CardFooter>
        </Card> */}

        <h3 className="page-heading">Card Header</h3>
        <Card>
          <CardBody>
            <p className="text-center">This is a card body</p>
            <Button label="Click me!" className="mx-1" onClick={() => {
              pushToast({
                header: "Some info",
                body: "Hello, world! This is an info toast.",
              })
            }} />
          </CardBody>
          <CardFooter>Im card footer</CardFooter>
        </Card>

        <ProgressBar
          status={colors.danger}
          size="lg"
          value={78}
          min={20}
          max={50}
          label={true}
          striped={true}
        />
      </HorizontalLayout>
    </div>
  )
}

export default App