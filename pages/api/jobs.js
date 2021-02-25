import jobsList from '../../data/jobs'

export default async (req, res) => {
  res.statusCode = 200
  var jobs = jobsList
  if (req.query.type) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.job_type === req.query.type)) {
        job.items = job.items.filter((item) => item.job_type === req.query.type)
        return true
      }
    })
  }
  if (req.query.department) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.department.includes(req.query.department))) {
        job.items = job.items.filter((item) => item.department.includes(req.query.department))
        return true
      }
    })
  }
  if (req.query.schedule) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.work_schedule === req.query.schedule)) {
        job.items = job.items.filter((item) => item.work_schedule === req.query.schedule)
        return true
      }
    })
  }

  if (req.query.experience) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.experience === req.query.experience)) {
        job.items = job.items.filter((item) => item.experience === req.query.experience)
        return true
      }
    })
  }
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json({ jobs: jobs })
}
