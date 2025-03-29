import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./components/Layout/Topbar";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <TopBar />
        <Header />
        <Content>
          <Home />
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
