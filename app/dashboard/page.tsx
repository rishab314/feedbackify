import Form from "@/components/form";
import Header from "@/components/headerd";
import PostFeed from "@/components/post";
import Sidebar from "@/components/sidebar";

export default function dashboard(){
    return(<div className="flex flex-row">
        <div className="flex-initial  w-1/6"><Sidebar /></div>
        
        <div className=" flex-end  w-5/6">
            <Header label="Home" />
            <Form placeholder="What do you want to change" />
            <PostFeed />
        </div>
            
    
        
    </div>)
}