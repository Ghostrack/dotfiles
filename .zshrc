eval "$(starship init zsh)"

# alias flac2m4a=“for file in *.flac; do afconvert -f m4af -d aac -s 3 -ue vbrq 127 -q 127 \”$file\”; done”
flac2m4af () {
    for file in *.flac; do
        # afconvert -f m4af -d aac -s 3 -ue vbrq 127 -q 127 $file converted/${file%.flac}.m4a;
        afconvert -f m4af -d alac $file converted/${file%.flac}.m4a;
    done
}

flac2alacf () {
    for name in *.flac; do ffmpeg -nostdin -i "$name" -c:a alac -c:v copy "converted/${name%.*}.m4a"; done
}

alias flac2m4a="mkdir converted && flac2m4af"
alias flac2alac="mkdir converted && flac2alacf"
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export PATH="/usr/local/opt/python/libexec/bin:$PATH"

typeset -U path cdpath fpath
path=(
    $HOME/.local/bin
    $HOME/.config/composer/vendor/bin
    ./vendor/bin
    $path
)

setopt auto_cd
cdpath=(
    $HOME/projects
)

# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
