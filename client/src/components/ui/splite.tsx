import { Suspense, lazy, useRef, useEffect } from 'react'
import type { Application, SPEObject } from '@splinetool/runtime'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const targetObjectRef = useRef<SPEObject | null>(null)

  const onLoad = (splineApp: Application) => {
    splineRef.current = splineApp
    
    try {
      const allObjects = splineApp.getAllObjects()
      const robotHead = allObjects.find((obj: SPEObject) => 
        obj.name?.toLowerCase().includes('head') || 
        obj.name?.toLowerCase().includes('robot') ||
        obj.name?.toLowerCase().includes('skull')
      )
      
      if (robotHead) {
        targetObjectRef.current = robotHead
      }
    } catch (error) {
      console.debug('Spline object search:', error)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current || !containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const normalizedY = -((e.clientY - rect.top) / rect.height) * 2 + 1

      try {
        if (targetObjectRef.current) {
          const rotationSpeed = 0.3
          targetObjectRef.current.rotation.y = normalizedX * rotationSpeed
          targetObjectRef.current.rotation.x = normalizedY * rotationSpeed * 0.5
        }
      } catch (error) {
        console.debug('Spline rotation update:', error)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  )
}
