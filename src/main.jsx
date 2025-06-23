import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import Layout from './layout/MainLayout.jsx'
import Accounts from './Pages/Accounts.jsx'
import Expences from './Pages/Expences.jsx'
import Settings from './Pages/Settings.jsx'
import Summary from './Pages/Summary.jsx'
import Wallets from './Pages/Wallets.jsx'
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/expences' element={<Expences />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/wallets' element={<Wallets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
