# Portfolio template

[Open the live template preview](https://sample-studio-portfolio-template.vercel.app/) to try the layout with sample projects.

Create a personal project portfolio with a responsive introduction, project case studies, skills, work and education sections. Visitors can change the theme or switch between English, Spanish and Dutch. The sample projects and work history are fictional.

## Run locally

Use Node.js 22. Run `npm ci`, then `npm run dev` and open the local URL printed by Next.js. Run `npm run check` and `npm run build` before publishing.

## Make it yours

1. Set the public display name and initials in `lib/profile.ts`. A portrait is optional. An HTTPS or email contact link enables the contact action.
2. Edit the project, skills and experience entries in `lib/content/en.json`, `es.json` and `nl.json`. Keep their field names aligned. The first project is shown first.
3. Style the page in `app/globals.css`. The navigation and hero components live in `components/`.
4. For a public portrait, use an image URL compatible with your Next.js image settings or an image path from your own deployment. Images displayed on a public website can be downloaded by visitors.

A clone starts with initials and sample data. For a personal site containing real contact information or photos, customise a private copy. Keep environment files, keys and unpublished documents outside version control.
