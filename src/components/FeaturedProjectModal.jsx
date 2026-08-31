import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function FeaturedProjectModal({ project, onClosed }) {
  const [isClosing, setIsClosing] = useState(false)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  const requestClose = () => setIsClosing(true)

  useEffect(() => {
    const body = document.body
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
    closeButtonRef.current?.focus()

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        requestClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const finishClosing = (event) => {
    if (isClosing && event.target === dialogRef.current) onClosed()
  }

  return createPortal(
    <div
      className={`project-modal-backdrop${isClosing ? ' is-closing' : ''}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose()
      }}
    >
      <article
        className={`project-modal${isClosing ? ' is-closing' : ''}`}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-detail-title`}
        onAnimationEnd={finishClosing}
      >
        <button
          className="project-modal-close"
          type="button"
          aria-label="Close project details"
          ref={closeButtonRef}
          onClick={requestClose}
        >
          ×
        </button>

        <div className="project-modal-scroll">
          <header className="project-modal-header">
            <div className="project-modal-heading">
              <h2 id={`${project.id}-detail-title`}>{project.title}</h2>
              <ul className="tags" aria-label="Skills and tools">
                {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
            {project.image ? (
              <img className="project-modal-image" src={project.image} alt={project.imageAlt || ''} />
            ) : (
              <div className="project-modal-image-placeholder" aria-label="Project visual placeholder">
                Project visual
              </div>
            )}
          </header>

          <div className="project-modal-body">
            {project.role && <p className="project-modal-role"><strong>Role:</strong> {project.role}</p>}
            {project.detailIntro && <p>{project.detailIntro}</p>}
            {project.detailImages?.length > 0 && (
              <div className="project-detail-gallery" aria-label={`${project.title} additional project views`}>
                {project.detailImages.map((image, index) => (
                  <div className="project-detail-gallery-item" key={image}>
                    <img src={image} alt={`${project.title} project view ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
            {project.detailSections?.map((section, index) => (
              <section className="project-modal-section" key={`${section.heading}-${index}`}>
                {section.heading && <h3>{section.heading}</h3>}
                {Array.isArray(section.body) ? (
                  section.body.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))
                ) : (
                  <p>{section.body}</p>
                )}
              </section>
            ))}
            {project.link && project.link !== '#' && (
              <a className="project-modal-link" href={project.link} target="_blank" rel="noreferrer">
                View project ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </div>,
    document.body,
  )
}

export default FeaturedProjectModal
