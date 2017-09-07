When you run a command in the terminal, where does BASH look for that command?
BASH Looks into the $PATH directories

On a UNIX computer, how do you stop a running process?
You would use control-c if the program is in the foreground or
"kill psid" with psid being the pid from the ps command.

What packages do you have installed via homebrew?
I'm not sure if you are asking how to list that or what i have installed so I will put both down.
Using "brew list" I get
go		icu4c		openssl		readline
hub		node		postgresql


On a UNIX computer, how do you find the process id of a running process?
You would type in "ps" and it would be under PID


In a terminal, what does control-c do?
It stops whatever is currently running in the terminal.

What would be the result of typing the following commands?
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
This would change the current directory to /Users/steve and make a
directory named foo. After that it creates a file named bar. Then
it goes into the directory foo and makes another file named bar.
Finally it lists the current directory named /Users/steve/foo

How do you set an environment variable in your shell?
EXAMPLE='words'

What keyboard shortcut do you use to split the screen in your editor?
If you wanted to split the screen in atom first you would press cmd-k.
Afterwards press the direction you would want to split it to with the
arrow keys.

How do you create an alias in your shell?
First you would type in alias and then you would type what you want to alias
the command to. Finally you would type the command.
Example: alias ll="ls -l"

When a terminal command completes, how can you tell if it was successful or not?
If the command does not return an error than it was successful.




What does your ~/.gitconfig have in it? (paste the whole file here)
[core]
  # Excludesfiles allows us to set a global list of things to ignore
  excludesfile = ~/.gitignore_global
	editor = nano

# These are custom color options for the console
[color]
  status = auto
  diff = auto

[color "status"]
  untracked = cyan
  changed = green
  added = yellow

# Aliases are command shortcuts
[alias]
  co = checkout

  # lg is now a shortcut for a pretty log with short commit messages
  # See the log manpage: https://www.kernel.org/pub/software/scm/git/docs/git-log.html
  # for explanations of what these options do
  lg = log \
    --graph \
    --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' \
    --abbrev-commit \
    --date=relative

  # Shorthand for commit, also enforces diff display in editor before commit
  ci = commit --verbose

  # Shorthand for a less noisy status
  s = commit --dry-run --short

  # More sensible names for adding and removing files from the readme
  stage = add
  unstage = reset HEAD

  # Edit the last commit
  amend= commit --verbose --amend
[filter "lfs"]
	clean = git-lfs clean %f
	smudge = git-lfs smudge %f
	required = true
[user]
	name = NeoJax
	email = NeoJax@gmail.com
[credential]
	helper = osxkeychain





What is the difference between a relative and absolute path?
An absolute path gives the full directory, whereas the relative path might
start from a closer directory.

Lets say you have the following file structure
~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?
First the command to copy is cp then you would type in what you want copied.
Then you would type in the directory you want the file to go into.
/Projects/linked-for-dancers
In its entirety
cp README.md /Projects/

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
CTRL-Tab or CMD="Number of the tab you are switching too."

What files or folders do you want all git repositories to ignore?
There is an official list at https://github.com/github/gitignore.
Otherwise there are some common ones like packaged files,

What is the main difference between Array.map and Array.forEach in JavaScript?
Map iterates over each item in the array and returns a new array with the same size.
Foreach iterates over each item in the array and applies something to them.
