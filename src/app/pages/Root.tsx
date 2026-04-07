import { Outlet, Navigate } from 'react-router';
import { useWorkflow } from '../context/WorkflowContext';
import { Sidebar } from '../components/Sidebar';

function ProtectedLayout() {
  const { isAuthenticated } = useWorkflow();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export function Root() {
  return <ProtectedLayout />;
}