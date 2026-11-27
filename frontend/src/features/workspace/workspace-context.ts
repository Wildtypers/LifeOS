'use client'

import { createContext, useContext } from 'react'

export const WorkspaceContext = createContext<{ openCheckin: () => void } | null>(null)

export function useWorkspace() {
  const workspace = useContext(WorkspaceContext)

  if (!workspace) {
    throw new Error('Workspace controls require the workspace layout.')
  }

  return workspace
}
