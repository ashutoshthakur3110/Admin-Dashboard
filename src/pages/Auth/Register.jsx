import { Link } from 'react-router'

const Register = () => {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
        <div className="w-full max-w-xl">

          <div className="mb-8">
            <p className="text-sm font-semibold text-indigo-600">GET STARTED</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Create your account</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Register as an administrator or employee to join your workspace.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Account type</label>
              <select

                defaultValue="employee"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none"
              >
                <option value="employee">Employee</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                <input
                  type="text"
                  placeholder="e.g. Morgan"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Work email</label>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Department</label>
                <input
                  type="text"
                  placeholder="e.g. Operations"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Employee ID <span className="font-normal text-slate-400">(optional)</span></label>
                <input
                  type="text"
                  placeholder="e.g. BF-1024"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Confirm password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none"
                />
              </div>
            </div>

            <button
              type="button"
              className="h-12 w-full rounded-xl bg-gray-100 px-5 text-sm font-semibold text-black shadow-lg"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account? <Link to="/login" className="font-semibold text-gray-600">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register
