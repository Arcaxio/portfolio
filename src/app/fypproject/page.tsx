export default async function FYPProject() {
  return (
    <div className="min-h-screen text-2xl sm:text-4xl w-11/12 sm:w-4/5 m-auto pt-8 sm:pt-16 text-center">
      <p>So you might be wondering, where&apos;s my FYP Project?</p>
      <br />
      <p>Yeah, about that.</p>
      <p>It was expensive to keep it alive,</p>
      <p>therefore... it&apos;s dead. </p>
      <br />
      <p>But you can read about my experience making it instead!</p>
      <br />

      <article>
        <p>
          In laymans terms, it is a system developed using an open source
          project called Eclipse Hono, that is running on a kubernetes cluster.
          For people who has experience with kubernetes, it will probably be
          quick for you to get it up and running. But for anyone who has never
          touched it, join in for the ride!
        </p>
        <br />
        <p>
          First, you&apos;ll need to use Linux! But don&apos;t worry, you
          don&apos;t need to wipe your drive or dual boot, using the Ubuntu
          Windows Subsystem for Linux &#40;WSL&#41; will suffice. So head on
          over to the Windows Store and download the latest version of the
          Ubuntu WSL.
        </p>
        <br />
        <p>
          After that, open up the Ubuntu WSL, and type in the following
          commands:
        </p>
        <br />
        <div className="text-start">
          <li>sudo apt update</li>
          <li>sudo apt install snapd</li>
          <li>sudo snap install helm –classic</li>
          <li>sudo snap install kubectl –classic</li>
          <li>sudo snap install doctl</li>
          <li>sudo snap connect doctl:kube-config</li>
          <li>sudo snap connect doctl:ssh-keys :ssh-keys</li>
          <li>sudo snap connect doctl:dot-docker</li>
        </div>
        <p>

        </p>
        <br/>
        <p>

        </p>
        <br/>
        
        {/* Incomplete */}
        <br/>
        <p>&#91;INCOMPLETE&#93;</p>
      </article>
    </div>
  );
}
