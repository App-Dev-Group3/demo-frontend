import { Outlet } from 'react-router';
import { WorkflowProvider } from '../context/WorkflowContext';
import { Sidebar } from '../components/Sidebar';

export function Root() {
  return (
    <WorkflowProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </WorkflowProvider>
  );
}
