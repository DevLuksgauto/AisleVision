import FrontPage from "@/components/templates/FrontPage";

export default function Home() {
  return (
    <main style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <FrontPage/>
    </main>
  );
}
